import {useForm} from "react-hook-form";
import s from "./MovieSearchInput.module.css"

type Props = {
    submitFunc: (title: string) => void,
    initialValue: string,
}

type Inputs = {
    movieTitle: string,
}

export const MovieSearchInput = ({submitFunc,initialValue}: Props) => {
    const {register, handleSubmit, watch} = useForm<Inputs>({
        defaultValues: {
            movieTitle: initialValue
        }
    })



    const submitHandler = (data: Inputs) => {
        submitFunc(data.movieTitle)
    }

    return (
        <form className={s.searchForm} onSubmit={handleSubmit(submitHandler)}>
            <input className={s.input} {...register("movieTitle")} type={"search"} placeholder={"Search for a movie"}/>
            <button disabled={!watch("movieTitle")} className={s.button} type={"submit"}>Search</button>
        </form>
    )
}