require('dotenv').config();
const express = require('express')
const app = express()
const bodyParser=require('body-parser');
const cors=require('cors');


app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


const mysql = require('mysql2')
const db = mysql.createConnection(process.env.DATABASE_URL);




app.get('/', (req, res) => {
  res.send("hello")
})



app.get('/checklogin', (req, res) => {
  username=req.query.username;
  pass=req.query.pass;
  const ele="select id from Login_Back_Dev where uname=? and pass=?;";
  db.query(ele,[username,pass],(err,result)=>{
    try{
      if(result[0].id)
      {
        res.send(true)
      }
      else{
        res.send(false)
      }
    }
    catch(e)
    {
      res.send(false)
    }
   
  })
})








// -------------------------  home ourstories recommended

app.post('/home/ourStorie/post',(req,res)=>{
  var title=req.body.title;
  var link=req.body.link;
  var img=req.body.img;
  var date=req.body.date;
  var time=req.body.time;
  var info=req.body.info
  var checkVal=req.body.checkVal;
  if(checkVal==='recommended')
  {
    const ele="insert into OurStories_Recommended(img,heading,date,time,info,link) values(?,?,?,?,?,?);";
    db.query(ele,[img,title,date,time,info,link,],(err,result)=>{
      res.send(result);
    })
  }
  else if(checkVal==='leadership')
  {
    const ele="insert into OurStories_Leadership(img,heading,date,time,info,link) values(?,?,?,?,?,?);";
    db.query(ele,[img,title,date,time,info,link,],(err,result)=>{
      res.send(result);
    })
  }
  else if(checkVal==='csr')
  {
    const ele="insert into OurStories_Csr(img,heading,date,time,info,link) values(?,?,?,?,?,?);";
    db.query(ele,[img,title,date,time,info,link,],(err,result)=>{
      res.send(result);
    })
  }
  else if(checkVal==='sustainability')
  {
    const ele="insert into OurStories_Sustainability(img,heading,date,time,info,link) values(?,?,?,?,?,?);";
    db.query(ele,[img,title,date,time,info,link,],(err,result)=>{
      res.send(result);
    })
  }
})

app.get('/home/ourStorie/get',(req,res)=>{
  var checkVal=req.query.checkVal;
  if(checkVal==='recommended')
  {
    const ele="select * from OurStories_Recommended;";
    db.query(ele,(err,result)=>{
      res.send(result);
    })
  }
  else if(checkVal==='leadership')
  {
    const ele="select * from OurStories_Leadership;";
    db.query(ele,(err,result)=>{
      res.send(result);
    })
  }
  else if(checkVal==='csr')
  {
    const ele="select * from OurStories_Csr;";
    db.query(ele,(err,result)=>{
      res.send(result);
    })
  }
  else if(checkVal==='sustainability')
  {
    const ele="select * from OurStories_Sustainability;";
    db.query(ele,(err,result)=>{
      res.send(result);
    })
  }
})




// --------------------- home latest news


app.post('/home/latestnews/post',(req,res)=>{

  var link=req.body.link;
  var date=req.body.date;
  var info=req.body.info

    const ele="insert into Home_LatestNews(date,info,link) values(?,?,?);";
    db.query(ele,[date,info,link,],(err,result)=>{
      res.send(result);
    })
})

app.get('/home/latestnews/get',(req,res)=>{
  const ele="select * from Home_LatestNews;";
  db.query(ele,(err,result)=>{
    res.send(result);
  })
})





// --------------------- innovation


app.post('/innovation/post',(req,res)=>{
  var checkVal=req.body.checkVal;
  if(checkVal==='card')
  {
    var name=req.body.name;
    var img=req.body.img;
    var info=req.body.info
    const ele="insert into Innovation_Card(name,img,info) values(?,?,?);";
    db.query(ele,[name,img,info,],(err,result)=>{
      res.send(result);
    })
  }
  else if(checkVal==='insight')
  {
    var img=req.body.img;
    var info=req.body.info
    const ele="insert into Innovation_Insight(img,info) values(?,?);";
    db.query(ele,[img,info,],(err,result)=>{
      res.send(result);
    })
  }
})

app.get('/innovation/get',(req,res)=>{
  var checkVal=req.query.checkVal;
  if(checkVal==='card')
  {
    const ele="select * from Innovation_Card;";
    db.query(ele,(err,result)=>{
      res.send(result);
    })
  }
  else if(checkVal==='insight')
  {
    const ele="select * from Innovation_Insight;";
    db.query(ele,(err,result)=>{
      res.send(result);
    })
  }
})





// --------------------- innovation


app.post('/leadership/post',(req,res)=>{
  var checkVal=req.body.checkVal;
  if(checkVal==='director')
  {
    var name=req.body.name;
    var jobtitle=req.body.jobtitle;
    var img=req.body.img;
    const ele="insert into Leadership_Director(name,jobtitle,img) values(?,?,?);";
    db.query(ele,[name,jobtitle,img,],(err,result)=>{
      res.send(result);
    })
  }
  else if(checkVal==='head')
  {
    var name=req.body.name;
    var jobtitle=req.body.jobtitle;
    var img=req.body.img;
    const ele="insert into Leadership_Head(name,jobtitle,img) values(?,?,?);";
    db.query(ele,[name,jobtitle,img,],(err,result)=>{
      res.send(result);
    })
  }
  else if(checkVal==='leader')
  {
    var name=req.body.name;
    var jobtitle=req.body.jobtitle;
    var img=req.body.img;
    const ele="insert into Leadership_Leader(name,jobtitle,img) values(?,?,?);";
    db.query(ele,[name,jobtitle,img],(err,result)=>{
      res.send(result);
    })
  }
  else if(checkVal==="vanguard")
  {
    var name=req.body.name;
    const ele="insert into Leadership_Vanguard(name) values(?);";
    db.query(ele,[name],(err,result)=>{
      res.send(result);
    })
  }
})

app.get('/leadership/get',(req,res)=>{
  var checkVal=req.query.checkVal;
  if(checkVal==='director')
  {
    const ele="select * from Leadership_Director;";
    db.query(ele,(err,result)=>{
      res.send(result);
    })
  }
  else if(checkVal==='head')
  {
    const ele="select * from Leadership_Head;";
    db.query(ele,(err,result)=>{
      res.send(result);
    })
  }
  else if(checkVal==='leader')
  {
    const ele="select * from Leadership_Leader;";
    db.query(ele,(err,result)=>{
      res.send(result);
    })
  }
  else if(checkVal==="vanguard")
  {
    const ele="select * from Leadership_Vanguard;";
    db.query(ele,(err,result)=>{
      res.send(result);
    })
  }
})





// --------------------- womenleadership


app.post('/womenleadership/post',(req,res)=>{
  var checkVal=req.body.checkVal;
  if(checkVal==='bettertogether')
  {
    var name=req.body.name;
    var info=req.body.info;
    var img=req.body.img;
    const ele="insert into Women_Leadership_Better_Together(name,img,info) values(?,?,?);";
    db.query(ele,[name,img,info],(err,result)=>{
      res.send(result);
    })
  }
  else if(checkVal==='boundries')
  {
    var name=req.body.name;
    var info=req.body.info;
    var img=req.body.img;
    const ele="insert into Women_Leadership_Redefining_Boundaries(name,img,info) values(?,?,?);";
    db.query(ele,[name,img,info],(err,result)=>{
      res.send(result);
    })
  }
})

app.get('/womenleadership/get',(req,res)=>{
  var checkVal=req.query.checkVal;
  if(checkVal==='bettertogether')
  {
    const ele="select * from Women_Leadership_Better_Together;";
    db.query(ele,(err,result)=>{
      res.send(result);
    })
  }
  else if(checkVal==='boundries')
  {
    const ele="select * from Women_Leadership_Redefining_Boundaries;";
    db.query(ele,(err,result)=>{
      res.send(result);
    })
  }
})






// --------------------- event


app.post('/event/post',(req,res)=>{
  var name=req.body.name;
  var link=req.body.link;
  var img=req.body.img;
  var date=req.body.date;
  var info=req.body.info
  const ele="insert into event(name,link,img,date,info) values(?,?,?,?,?);";
  db.query(ele,[name,link,img,date,info],(err,result)=>{
    res.send(result);
  })
})

app.get('/event/get',(req,res)=>{
  const ele="select * from event;";
  db.query(ele,(err,result)=>{
    res.send(result);
  })
})








// --------------------- investor


app.post('/investor/post',(req,res)=>{
  var checkVal=req.body.checkVal;
  if(checkVal==="company")
  {
    var name=req.body.name;
    var link=req.body.link;
    var img=req.body.img;
    var detail=req.body.detail;
    var info=req.body.info
    const ele="insert into investor_Company(name,link,img,detail,info) values(?,?,?,?,?);";
    db.query(ele,[name,link,img,detail,info],(err,result)=>{
      res.send(result);
    })
  }
  else if(checkVal==="update")
  {
    var info=req.body.info
    const ele="insert into investor_update(info) values(?);";
    db.query(ele,[info],(err,result)=>{
      res.send(result);
    })
  }
})

app.get('/investor/get',(req,res)=>{
  var checkVal=req.query.checkVal;
  if(checkVal==="company")
  {
    const ele="select * from investor_Company;";
    db.query(ele,(err,result)=>{
      res.send(result);
    })
  }
  else
  {
    const ele="select * from investor_update;";
    db.query(ele,(err,result)=>{
      res.send(result);
    })
  }
  
})









// --------------------- mediarelease


app.post('/mediarelease/post',(req,res)=>{
  var date=req.body.date;
  var link=req.body.link;
  var info=req.body.info;
  const ele="insert into mediarelease(date,info,link) values(?,?,?);";
  db.query(ele,[date,info,link],(err,result)=>{
    res.send(result);
  })
})

app.get('/mediarelease/get',(req,res)=>{
    const ele="select * from mediarelease;";
    db.query(ele,(err,result)=>{
      res.send(result);
    })
})



// --------------------- pressreport


app.post('/pressreport/post',(req,res)=>{
  var date=req.body.date;
  var link=req.body.link;
  var info=req.body.info;
  var name=req.body.name;
  const ele="insert into pressreport(date,info,link,name) values(?,?,?,?);";
  db.query(ele,[date,info,link,name],(err,result)=>{
    res.send(result);
  })
})

app.get('/pressreport/get',(req,res)=>{
    const ele="select * from pressreport;";
    db.query(ele,(err,result)=>{
      res.send(result);
    })
})



// --------------------- stories


app.post('/stories/post',(req,res)=>{
  var date=req.body.date;
  var link=req.body.link;
  var topic=req.body.topic;
  var info=req.body.info;
  var name=req.body.name;
  var img=req.body.img;
  const ele="insert into stories(date,info,link,name,topic,img) values(?,?,?,?,?,?);";
  db.query(ele,[date,info,link,name,topic,img],(err,result)=>{
    res.send(result);
  })
})

app.get('/stories/get',(req,res)=>{
    const ele="select * from stories;";
    db.query(ele,(err,result)=>{
      res.send(result);
    })
})




app.post('/delete/post',(req,res)=>{
  var name=req.body.name;
  var id=req.body.id;
  const ele="delete from "+name+" where id=?;";   //fix this 
  db.query(ele,[id],(err,result)=>{
    res.send(result);
  })
})
















const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`listning on port ${port}`);
});