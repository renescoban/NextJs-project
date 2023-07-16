export async function GET(request){

    const users = [
        {id: 1 , name: 'john'},
        {id: 2 , name: 'Mike'},
        
    ];

    return new Response(JSON.stringify(users))
}