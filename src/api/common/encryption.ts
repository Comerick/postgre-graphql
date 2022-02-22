import cryptoJs from 'crypto-js'

export function encrypt(text: string): string {
  return cryptoJs.AES.encrypt(text, process.env.SECRET_KEY!).toString()
}

export function decrypt(ciphertext: string): string {
  const bytes = cryptoJs.AES.decrypt(ciphertext, process.env.SECRET_KEY!)

  return bytes.toString(cryptoJs.enc.Utf8)
}
