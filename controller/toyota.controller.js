class User {
    async signup(email, password) {

        let value = {
            name: "fadhil",
            gender: "pria",
            hobby: "coding",
            score: 80
        }

        if (value.name == 'fadhil') {
            value.score = 100
        }

        console.log(`successfully inject to controller email ${email}`)
        console.log(`successfully inject to controller email ${password}`)
        return
    }
}

module.exports = User