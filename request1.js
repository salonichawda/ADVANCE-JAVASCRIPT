// const { readFileSync } = require("fs");
userinput=require("readline-sync");
axioss=require("axios");
fs=require("fs");
url=axioss.get("https://api.merakilearn.org/courses")

.then(res=>{
    link=res.data
    fs.writeFileSync("course.json",JSON.stringify(link,null,4))
    read=fs.readFileSync("course.json");
    read=JSON.parse(read)
    serialNumber=1
    for(i of read){
        console.log(serialNumber,i["name"])
        serialNumber++
    }

    courseNumber=userinput.questionInt('Enter the number of course :- ')
    console.log("\n")
    console.log(read[courseNumber-1]["name"],read[courseNumber-1]["id"],"\n")

    coursename=read[courseNumber-1]["name"]
    id=read[courseNumber-1]["id"]
    url1=axioss.get("https://api.merakilearn.org/courses/"+id+"/exercises")

    .then(ressolve=>{
        link1=ressolve.data
        fs.writeFileSync(coursename+".json",JSON.stringify(link1,null,4))
        read1=fs.readFileSync(coursename+".json");
        read1=JSON.parse(read1);

        count1=1
        for (i of read1["course"]["exercises"]){
            console.log(count1,i["name"])
            console.log("\t",i["slug"])
            count1++
        }

        slugNumber=userinput.questionInt("Enter the slug number :- ")
        slugNumber-=1
        for (i of read1["course"]["exercises"][slugNumber]["content"]){
            console.log(i["value"])
        }

        while(slugNumber<(read1["course"]["exercises"]).length){
            previousNext=userinput.question("enter slug number you wnat previous or Next:-");
            if(previousNext==="p"){
                slugNumber-=1
                if(slugNumber>=0){
                    for(i of read1["course"]["exercises"][slugNumber]["content"]){
                        console.log(i["value"]);
                    }
                }else{
                    console.log("This is your last slug")
                    break
                }
            }

            else if(previousNext==="n"){
                slugNumber+=1
                if(slugNumber<(read1["course"]["exercises"]).length){
                    console.log(read1["course"]["exercises"][slugNumber]["name"])
                    for(i of read1["course"]["exercises"][slugNumber]["content"]){
                        console.log(i["value"]);
                    }   
                }
                else{
                    console.log("Topic is complete")
                    break
                }
            }
            
            else{
                console.log("Enter valid userinput")
            }
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})
.catch((error)=>{
    console.log(error);
})