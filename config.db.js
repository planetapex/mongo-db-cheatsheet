module.exports = 
{
  mongodb: {
    user: 'test',
    password: 's',
    host: 'localhost',
    port: '27017',
    db:'blog',
    dbURL:function() {
      return `mongodb://${this.user}:${this.password}@${this.host}:${this.port}/${this.db}`
    }
  }
}