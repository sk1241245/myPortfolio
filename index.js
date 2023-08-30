const {createServer} = require('http');
const {readFile} = require('fs');



const server = createServer((req,res)=>{

	function page(site){

		readFile(site,(err,data)=>{
			
			if(err) console.log("File Not Found");
			else {
				res.writeHead(200);
				res.write(data);
				res.end();
			}
		});
		
	}

	if(req.url == '/'){
		var src = "home.html";
		page(src);
	}
	else if(req.url == '/about'){
		page("about.html");
	}
	else if(req.url == '/resume'){
		page("resume.html");
	}
	else if(req.url == '/css/style.css'){
		page("css/style.css");
	}
	else if(req.url == '/css/back.png'){
		page("css/back.png");
	}
	else if(req.url == '/css/profile.jpg'){
		page("css/profile.jpg");
	}
	else{
		res.writeHead(404);
		res.end("<h1>File Not Found</h1>");
	}

});

server.listen(1234);
console.log("Server running");