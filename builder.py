import glob
import codecs
import os

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
    
    
    


    
"""
* Main function to handle program input and calling build
* Params: None
"""
def main():
    print("HTML Builder")
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