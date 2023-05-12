class GameManager {
    private currentState: number[][]
    private magicTubes: number[]

    constructor(initState: number[][], magicTubes: number[]) {
        this.currentState = initState

        //TODO: init your game logic here
        this.magicTubes = magicTubes

        console.log('INIT GAME:')
        console.log(`Magic tubes indexes: ${magicTubes.join(', ')}`)
        this.printState()
    }

    public pop(from: number) {
        var ball = 0
        if (this.magicTubes.includes(from)) {
            ball = this.currentState[from][0]
            var len = this.currentState[from].length
            for (var i = 1; i < len; i++) 
                this.currentState[from][i - 1] = this.currentState[from][i]
            this.currentState[from][len - 1] = 0
        }
        else {
            var maxlen = this.currentState[from].length
            var len = 0
            while (len < maxlen && this.currentState[from][len] != 0) {
                len += 1
            }

            if (len > 0) {
                ball = this.currentState[from][len - 1]
                this.currentState[from][len - 1] = 0
            }
        }
        return ball
    }

    public push(to: number, ball: number) {
        if (ball <= 0) return false

        var maxlen = this.currentState[to].length
        var len = 0
        while (len < maxlen && this.currentState[to][len] != 0) {
            len += 1
        }
        
        if (len == maxlen) return false
        else {
            this.currentState[to][len] = ball
            return true
        }
    }

    public move(from: number, to: number): void {
        //TODO: implement your move logic here
        var ball = this.pop(from)
        //console.log("pop finish")
        if (ball == 0) {
            console.log(`Tube ${from} is empty!`)
            return
        }

        if (!this.push(to, ball)) {
            console.log(`Tube ${to} is full!`)
            return
        }

        console.log(`MOVE FROM ${from} TO ${to}:`)
        this.printState()

        if (this.isWin()) {
            console.log("YOU WIN")
        }
    }

    public isWin(): boolean {
        return this.currentState.every(tube => {
            const firstColor = tube[0]
            for (let i = 1; i < tube.length; i++) {
                const color = tube[i]

                if (firstColor != color) return false
            }

            return true
        })
    }

    private printState(): void {
        const transposing = this.currentState[0].map((_, colIndex) => this.currentState.map(row => row[row.length - 1 - colIndex]));

        console.log(transposing.map(row => row.join('\t')).join('\n'))
    }
}

export default GameManager