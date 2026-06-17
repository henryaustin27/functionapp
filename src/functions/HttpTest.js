const { app } = require('@azure/functions');

app.http('HttpTest', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('HTTP test function processed a request.');

        const name = request.query.get('name') || 'Austin';

        return {
            status: 200,
            jsonBody: {
                message: `Hello ${name}, Node.js Azure Function deployment is working!`,
                time: new Date().toISOString()
            }
        };
    }
});