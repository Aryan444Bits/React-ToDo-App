import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Create = (props) => {

    const todos = props.todos;
    const settodos = props.settodos;
    const { // here we use the usefrom hook its used form managing the forms
        register, // register the user
        handleSubmit,//handle the sumbition of form
        reset,// reset the form
        formState: { errors }, // handle the errors in forms
    } = useForm();

    const submithandler = (data) => {
        data.isCompleted = false;
        data.id = nanoid();
        
        const copytodos = [...todos];
        copytodos.push(data);
        settodos(copytodos);
        
        toast.success("Todo Created....")
        reset();
    }

    return (
        <div className='w-[60%] p-10'>
            <h1 className='mb-10 text-5xl font-thin'>
                Set <span className='text-red-400'>Reminder</span> For <br />Tasks
            </h1>
            <form onSubmit={handleSubmit(submithandler)}>
                <input
                    {...register("title" ,{
                        required: "title can not be empty",
                    })}
                    className='p-2 border-b w-full text-2xl font-thin outline-0'
                    type="text"
                    placeholder='title'
                />
                {/* {errors && errors.title && errors.title.message &&(<small>{errors.title.message}</small>)} */}
                <small className='font-thin text-red-400'>{errors?.title?.message}</small> {/*herre we applying the validation*/}
                <br /> 
                <br />
                <button className='mt-5 text-xl px-10 py-2 border rounded'>Create ToDo</button>
            </form>
        </div>
    )
}

export default Create