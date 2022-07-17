import net from 'net';



const helper = {
	findFreePort: function() {
		//Server configuration
		const server = net.createServer();
		const port = 3000;
		//Events
		server.once('error', function(err) {
			if(err.code === 'EADDRINUSE') {
				port++;
				server.listen(port);
			}
		})
		server.once('listening', function() {
			console.log('POrt is listening on port ' + port)
			server.close();
			// TODO the server.once function is being added to the server object. Therefore, it cannot return anything to the function which calls findFreePort because it's not bound to it's lexical context.
			// TODO another problem is that helper.findFreePort is being called synchronously, while server.once is an async listener, so by the time it produces a value 'undefined' has already been returned to the caller of helper.findFreePort.
			return port;
		})
		//Loop
		server.listen(port, ()=> {
			console.log('Server bound!')
		});
	}
	
}
export default helper;