# GANP-ToDo

### Используемые технологии:
1. Node.js
2. Nest.js
3. Angular.js (Material Design)
4. TypeORM(PostgreSQL)
5. rxjs
6. class-transformer

## Конфигурационные файлы

### .env
Есть два места с конфигурационными файлами .env
1. `~/.env` (Для Docker)
2. `~/back/.env` (Для ormconfig.ts -> ~/back/config/db.config.ts)

Пример содержимого:
```js
API_PORT=3001
API_HOST=localhost
TYPEORM_CONNECTION=postgres
TYPEORM_USERNAME=username
TYPEORM_PASSWORD=1010
TYPEORM_DATABASE=todo
TYPEORM_PORT=5432
```

**`~/.env` полностью копирует `~/back/.env`**

### nginx.conf
`~/front/nginx.conf`

## Migrations (Seeds)
1. Выставить для значения synchronize в ./back/src/config/db.config.js
2. Там же убрать комментарий с migrations
3. Запустить команду `npm run typeorm:migration:run`
4. После восстановить первые два пункта(п1, п2)

*Для удаления сидов потребуется выполнить команду: `npm run typeorm:migration:revert`

## Docker
Для запуска необходимо в корневом каталоге репозитория выполнить команду: </br>
`docker compose up -d --data` </br>
Для проверки запущенных контейнеров: </br>
`docker ps`

**Небольшие характеристики Docker**
1. Node 16 Alpine
2. nginx 1.17.1 (nginx.conf -> front/nginx.conf)
3. PostgreSQL 14 Alpine
4. Порты: db: 5432, back: 3001 | 3000, front: 80

## Ручной запуск
1. Установите локально PostgreSQL на порт 5432 с данными заложенными в **.env**
2. Проинициализируйте front и back командой: </br>
`npm i`
3. После чего небоходимо(для deployment) запустить команды: </br>
    1. `cd front && npm ng serve`
   2.  `cd back && npm nest start`
