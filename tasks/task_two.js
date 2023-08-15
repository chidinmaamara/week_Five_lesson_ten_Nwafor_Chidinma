class Phone{
    constructor(pack, screen, charger, memory, wifi){
        this.pack = pack
        this.screen = screen
        this.charger = charger
        this.memory = memory
        this.wifi = wifi
    }
}
let nokia = new Phone('blue', 'light', 'good', '20gb', 'connected')
let infinix = new Phone('red', 'light', 'bad', '64gb', 'connected')
let tecno = new Phone('gold', 'light', 'good', '80gb', 'disconnected')
let lenovo = new Phone('blue', 'light', 'good', '20gb', 'connected')

console.log(nokia,infinix, tecno, lenovo);