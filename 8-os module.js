const os=require('os')

const user=os.userInfo()

console.log(user);


console.log(`The system uptime is ${os.uptime()}`);

const systemOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(systemOS)