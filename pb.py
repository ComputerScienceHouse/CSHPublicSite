import glob
import codecs
import os 
import sys
import shutil
import errno
from optparse import OptionParser

"""
* Parses template metadata provided by user in file
* Params line - string - config line string
* Returns Hashmap of parsed data (key->value)

"""
def parseTemplateInformation(line):
    # parse line for id and type
    lineArr = line.split("{[")
    #print("INIT SPLIT: "+lineArr[1]) #debug
    lineArr = lineArr[1].split("]}")
    #print("Second SPLIT: "+lineArr[0]) #debug
    parameterString = lineArr[0]
    parameterArr = parameterString.split(",")
    for item in parameterArr:
        paramArr = item.split("=")
        key = paramArr[0].rstrip()
        key = key.lstrip()
        value = paramArr[1].rstrip()
        value = value.lstrip()
        #print("Param: (key) "+key+", (value) "+value) #debug
        #add to hashmap here
    
    
    return

def walklevel(some_dir, level):
    some_dir = some_dir.rstrip(os.path.sep)
    assert os.path.isdir(some_dir)
    num_sep = some_dir.count(os.path.sep)
    for root, dirs, files in os.walk(some_dir):
        yield root, dirs, files
        num_sep_this = root.count(os.path.sep)
        if num_sep + level <= num_sep_this:
            del dirs[:]

"""
* Copies all additional directories when buiding all
* Params:
*  - src - string - string to source dir
*  - dest - string - string to destination dir
* Returns: None
"""
def copytree(fileDir,src, dst, symlinks=False, ignore=None):
    fileDir = fileDir.replace("/","")
    for item in os.listdir(src):
        if "LICENSE" not in item and "README" not in item and "pyBuilder.py" not in item and ".DS_Store" not in item:
            s = os.path.join(src, item)
            if fileDir not in s and "build" not in s and ".git" not in s:
                d = os.path.join(dst, item)
                if os.path.isdir(s):
                    shutil.copytree(s, d, symlinks, ignore)
                else:
                    shutil.copy2(s, d)


"""
* Builds the HTML
* Params: fileIn - File - file to build
* Returns 1/0 - Success/Failure
"""
def buildFile(fileDir,fileNameIn,fileIn):
    print("building "+fileNameIn+"...") #debug
    fileNameDir = fileDir+fileNameIn;
    try:
        os.remove(fileNameDir)
    except OSError:
        pass
    builtFile = open(fileNameDir,"w")
    for num, line in enumerate(fileIn):
        if "<include" in line:
            strippedLine = line.strip()
            if '"' in strippedLine:
                splitter = '"'
            elif "'" in strippedLine:
                splitter = "'"
            else:
                splitter = '"'
            l = strippedLine.split(splitter)[1::2]
            fileName = l[0]
            print("including "+fileName+"...")
            includeFile = open(fileName, 'r')
            for i,line in enumerate(includeFile):
                #print(line) #debug
                
                if "{[" in line:
                    information = parseTemplateInformation(line)
                    #print(information) #debug
                
                builtFile.write(line)
        else:
            builtFile.write(line)
    
    print("successfully built "+fileNameIn)
    print()
    
    
    


    
"""
* Main function to handle program input and calling build
* Params: None
"""
def main():
    
    # Add parsing arguments #
    parser = OptionParser()
    parser.add_option("-f", "--file", dest="filename",
                  help="File to build", metavar="FILE")
    parser.add_option("-d", "--destination", dest="destination",
                  help="Destination of built assets", metavar="DESTINATION")
    (options, args) = parser.parse_args()
    
    
    if(options.filename and options.filename[-1] == "/"):
        print("error - filename cannot end in '/'")
        sys.exit()
    
    if(not options.destination):
        fileDir = "build/"
    elif(options.destination[-1] != "/"):
        print("error - destination must end in '/'")
        sys.exit()
    elif(options.destination == "/"):
        fileDir = ""
    else:
        fileDir = options.destination
    
    print("pyBuilder - HTML")
    print("================")
    print()

    if(not options.filename):
        if(options.destination is not "/"):
            if not os.path.exists(fileDir):
                os.makedirs(fileDir)
            else:
                shutil.rmtree(fileDir)
                os.makedirs(fileDir)
        
        
        # Copy all assets over to build directory #
        workingDir = os.getcwd()
        print("Copying all assets...")
        if options.destination is not "/":
            for root, dirs, files in walklevel(os.getcwd(),0):
                    copytree(fileDir,root,workingDir+"/"+fileDir)
          
        print("Assets copied to build directory.")
        print()
    
        # Generate HTML #
        fileArray = glob.glob("*.html");
        for i in range (0,len(fileArray)):
            fileName = fileArray[i]
            print("opening "+fileName+"...")
            openFile = codecs.open(fileName, 'r+')
            buildFile(fileDir,fileName,openFile)
    else:
        if not os.path.exists(fileDir) and options.destination is not "/":
            os.makedirs(fileDir)
        fileName = options.filename
        print("opening "+fileName+"...")
        openFile = codecs.open(fileName, 'r+')
        buildFile(fileDir,fileName,openFile)

    
main()