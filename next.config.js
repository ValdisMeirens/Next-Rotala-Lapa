/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    'MYSQL_HOST': '127.0.0.1',
    'HOST': 'http://localhost:3000',
    'MYSQL_PORT': '3306',
    'MYSQL_DATABASE': 'test',
    'MYSQL_USER': 'root',
    'MYSQL_PASSWORD': '',
  }
}

module.exports = nextConfig
