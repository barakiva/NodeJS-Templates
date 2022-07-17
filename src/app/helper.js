import net from 'net';
const helper = {
	findFreePort: new Promise((resolve, reject)=> {
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
			server.close();
			resolve(port);
		})
		server.listen(port, ()=> {});
	})
}
export default helper;