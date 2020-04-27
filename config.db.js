module.exports = 
{
  mongodb: {
    user: '',
    password: '',
    host: 'localhost',
    port: '27017',
    db:'blog',
    dbURL:function() {
	  var dbString;
      if(this.user == '') {
	  dbString = `mongodb://${this.host}:${this.port}/${this.db}`;
	  } else {
	   dbString = `mongodb://${this.user}:${this.password}@${this.host}:${this.port}/${this.db}`;  
	  }		  
	  return dbString;
    }
  }
}