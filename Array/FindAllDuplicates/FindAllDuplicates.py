def findAllDuplicates(numlist):                                                                                                                           
    for index, value in enumerate(numlist):                                                                                                               
        exist_index = abs(numlist[index]) - 1                                                                                                             
        if numlist[exist_index] < 0:                                                                                                                      
            yield value                                                                                                                                   
        else:                                                                                                                                             
            numlist[exist_index] = -numlist[exist_index]                                                                                                  
                                                                                                                                                          
                                                                                                                                                          
if __name__ == "__main__":                                                                                                                                
    print(list(findAllDuplicates([1, 1, 2, 3, 3])))  
