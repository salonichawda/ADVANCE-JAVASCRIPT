const axios=require("axios")
const fs=require("fs")
const n=require("readline-sync")
// const { setFlagsFromString } = require("v8")
let data1=axios.get("https://api.merakilearn.org/courses")
let promise=new Promise((resolve,reject)=>{
    resolve(data1)
})

promise.then((resolv)=>{
    data2=resolv.data
    fs.writeFileSync("courses.json",JSON.stringify(data2,null,3))

    serial=0
    for(i in data2){
        console.log(serial+1,data2[i]["name"]+"-"+data2[i]["id"]);
        serial+=1
    }
    console.log(" ");
    course_no=n.questionInt("select which course you want to display: ")

    console.log(course_no,data2[course_no-1]["name"]+"-"+data2[course_no-1]["id"]);
    course_id=data2[course_no-1]["id"]

    url=axios.get("https://api.merakilearn.org/courses/"+course_id+"/exercises")
    // console.log(url);
    let promise1=new Promise((resolve,reject)=>{
        resolve(url)
    })

    promise1.then((resolv1)=>{
        data3=resolv1.data
        fs.writeFileSync("courses_exercises.json",JSON.stringify(data3,null,3))
        s_no=1
        list1=[]
        list2=[]
        for(i of data3['course']['exercises']){
            if(i["parent_exercise_id"]===null){
                console.log(s_no,i['name']);
                console.log("  ",i['slug']);
                list2.push(i)
                list1.push(i)
                s_no++
                continue
            }
            else if(i["parent_exercise_id"]===i["id"]){
                console.log(s_no,i["name"]);
                list1.push(i)
                s_no++
                new_no=1
            }
            c=1
            for (j in  data3["course"]["exercises"]){
                if (i["parent_exercise_id"]!=i["id"]){
                    console.log("   ",new_no,i["name"])
                    list2.push(i)
                    // c+=1
                    new_no++
                    break
                }
                
            }
        }
        fs.writeFileSync("list1.json",JSON.stringify(list1,null,3))
        fs.writeFileSync("list2.json",JSON.stringify(list2,null,3))
        console.log(" ");
        parent_no=n.questionInt("which parent id you want please enter: ")
    
        idd=list1[parent_no-1]["id"]
        serial=1
        for(i of list1){
            if (i['parent_exercise_id']==i['id']){

                console.log(serial,list1[parent_no-1]['name'])
                serial+=1
                break
            }
            else if(i['parent_exercise_id']!=i['id']){
                console.log(serial,list1[parent_no-1]['name'])
    
                console.log(" ",list1[parent_no-1]['content'])
                serial+=1
                break
            }
        }
        name=[]
        content=[]
        new_no=1
        idd=list1[parent_no-1]['id']
        for(j of list2){
            if(j['parent_exercise_id']===idd){
                console.log(" ",new_no,j['name']);
                name.push(j["name"])
                content.push(j["content"])
                new_no+=1
            }
            // new_no+=1
        }
        child_no=n.questionInt("which child id do you want please enter: ")
        for(i in name){
            if(child_no-1===i){
                console.log(name[i]);
                console.log(content[i]);
                // break
            }
        }
    }).catch((rej)=>{
        console.log(rej);
    })
}).catch((rej)=>{
    console.log(rej);
})
