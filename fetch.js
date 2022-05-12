const SUPABASE_URL = '';
const SUPABASE_KEY = '';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getXXX() {
    const response = await client.from('');
    console.log (response);
    return response.data;
}

export async function getXxx(id) {
    const response = await client.from('XSUPABASEIDX').select('*').match({id});
}