

const Page = () => {

    const handleForm = async(e) => {
        'use server';
        console.log('Hello');
        console.log(e);
    }

    return (
        <div>
            <form action={handleForm}>
                <input type="text" name="username"/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Page