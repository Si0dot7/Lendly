FROM node:20-alpine

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install

COPY . .

# สร้างไฟล์สำหรับ production
RUN npm run build

CMD ["npm", "run", "preview"]

EXPOSE 5173
