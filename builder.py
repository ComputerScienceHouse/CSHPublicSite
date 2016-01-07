import glob
import codecs
import os
import fnmatch
import sys


def list_files(dir):                                                                                                  
    r = []                                                                                                            
    subdirs = [x[0] for x in os.walk(dir)]                                                                            
    for subdir in subdirs:                                                                                            
        files = os.walk(subdir).next()[2]                                                                             
        if (len(files) > 0):                                                                                          
            for file in files:                                                                                        
                r.append(subdir + "/" + file)                                                                         
    return r  

"""
* Builds the HTML
* Params: fileIn - File - file to build
* Returns 1/0 - Success/Failure
"""
def buildFile(fileNameIn,fileIn):
    print("building "+fileNameIn+"...") #debug
    if not os.path.exists("build"):
            os.makedirs("build")
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
    print("pyBuilder - HTML")
    print("============")
    fileName = input('build: ')
    print()
    if(fileName == '*'):
        
        fileArray = glob.glob("*.html");
        for i in range (0,len(fileArray)):
            fileName = fileArray[i]
            print("opening "+fileName+"...")
            openFile = codecs.open(fileName, 'r+')
            buildFile(fileName,openFile)
    else:
        print("opening "+fileName+"...")
        openFile = codecs.open(fileName, 'r+')
        buildFile(fileName,openFile)

    
main()