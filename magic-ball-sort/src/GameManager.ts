class GameManager {
    private currentState: number[][]

    constructor(initState: number[][], magicTubes: number[]) {
        this.currentState = initState

        //TODO: init your game logic here

        console.log('INIT GAME:')
        console.log(`Magic tubes indexes: ${magicTubes.join(', ')}`)
        this.printState()
    }

    public move(from: number, to: number): void {
        //TODO: implement your move logic here

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