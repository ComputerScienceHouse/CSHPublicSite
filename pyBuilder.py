import glob
import codecs
import os 
import sys
import shutil
import errno


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
def copytree(src, dst, symlinks=False, ignore=None):
    for item in os.listdir(src):
        if "LICENSE" not in item and "README" not in item and "pyBuilder.py" not in item:
            s = os.path.join(src, item)
            if "build" not in s and ".git" not in s:
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
def buildFile(fileNameIn,fileIn):
    print("building "+fileNameIn+"...") #debug
    fileNameDir = "build/"+fileNameIn;
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
    if(len(sys.argv) < 2):
        print("usage: pyBuilder.py path/to/file.html")
        print("or")
        print("usage: pyBuilder.py *")
        return 0;
    elif(sys.argv[1] is None):
        print("usage: pyBuilder.py path/to/file.html")
        print("or")
        print("usage: pyBuilder.py *")
        return 0;
    elif(sys.argv[1] == ""):
        print("usage: pyBuilder.py path/to/file.html")
        print("or")
        print("usage: pyBuilder.py *")
        return 0;
    
    print("pyBuilder - HTML")
    print("================")
    print()
    if(len(sys.argv) > 2):
        if not os.path.exists("build"):
            os.makedirs("build")
        else:
            shutil.rmtree('build')
            os.makedirs("build")
        
        
        # Copy all assets over to build directory #
        workingDir = os.getcwd()
        print("Copying all assets...")
        for root, dirs, files in walklevel(os.getcwd(),0):
                copytree(root,workingDir+"/build/")
          
        print("Assets copied to build directory.")
        print()
        # Generate HTML #
        fileArray = glob.glob("*.html");
        for i in range (0,len(fileArray)):
            fileName = fileArray[i]
            print("opening "+fileName+"...")
            openFile = codecs.open(fileName, 'r+')
            buildFile(fileName,openFile)
    else:
        fileName = sys.argv[1]
        print("opening "+fileName+"...")
        openFile = codecs.open(fileName, 'r+')
        buildFile(fileName,openFile)

    
main()