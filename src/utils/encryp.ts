import bcrypt from 'bcrypt';

class Encryp {

    private saltRounds: number = 10;

    async encryption(plainText: string): Promise<string> {
        return new Promise((resolve, reject) => {

            bcrypt.hash(plainText, this.saltRounds, (err, encrypted) => {
                if (err) return reject(err);
                
                return resolve(encrypted);
            });

        });
    }

    async verify(plainText: string, encryptionText: string) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(plainText, encryptionText, (err, result) => {
                if (err) return reject(err);

                return resolve(result);
            });

        });
    }



}

export default new Encryp();