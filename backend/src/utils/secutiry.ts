import * as crypto from 'crypto';
import config from 'src/config';

export function encrypt(email) {
  const cipher = crypto.createCipheriv(
    'aes-256-gcm',
    config.encryption.key,
    config.encryption.iv,
  );
  let encrypted = cipher.update(email, 'utf8');
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString('hex');
}

export function decrypt(email) {
  const decipher = crypto.createDecipheriv(
    'aes-256-gcm',
    Buffer.from(config.encryption.key),
    config.encryption.iv,
  );
  return decipher.update(Buffer.from(email, 'hex')).toString();
}
