module.exports = {
  apps: [{
    name: 'app',
    script: 'bin/www',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    output: './logs/out.log',
    error: './logs/error.log',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    ignore_watch: [
      '.git',
      'bin',
      'dist',
      'logs',
      'node_modules',
      'public',
      'src'
    ],
    env: {
      NODE_ENV: 'development',
      DEBUG: 'app:*'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]

  // deploy : {
  //   production : {
  //     user : 'node',
  //     host : '212.83.163.1',
  //     ref  : 'origin/master',
  //     repo : 'git@github.com:taichunmin/test-20190415.git',
  //     path : '/var/www/production',
  //     'post-deploy' : 'yarn && pm2 reload ecosystem.config.js --env production'
  //   }
  // }
}
