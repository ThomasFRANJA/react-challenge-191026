const prod = {
   url: {
      BACKEND_URL: 'http://51.15.195.139:8080'
   }
};


const dev = {
   url: {
      BACKEND_URL: 'http://localhost:8080'
   }
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;