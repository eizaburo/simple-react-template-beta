import React from "react";
import { useForm } from 'react-hook-form';

function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // alert(JSON.stringify(data));
        // const base_url = "https://script.google.com/macros/s/AKfycbytXB0FlXLKnEq49qVSmfMl9xfZ7gZpkZkn3J8gmJ5LriLjyLA77NNIm47e5y7qU4g3yA/exec";
        const base_url = process.env.REACT_APP_API_URL;

        fetch(base_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: encodeURI(`email=${data.email}&content=${data.content}`)
        })
            .then(function (response) {
                //リダイレクト先のテキストが戻るのを待つ
                response.text()
                    .then((text) => {
                        alert(text);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch(function (error) {
                alert("エラーが発生しました。");
            })
    }

    return (
        <main>
            <h1>お問合せ</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" {...register("email", { required: true })} />
                    {errors.email && <span className="form-error">Emailは必須です。</span>}
                </div>
                <div className="form-item">
                    <label htmlFor="content">お問合せ内容</label>
                    <textarea id="content" rows="3" {...register("content", { required: true })}></textarea>
                    {errors.content && <span className="form-error">お問合せ内容は必須です。</span>}
                </div>
                <div className="form-item">
                    <button id="btn" type="submit">送信</button>
                </div>
            </form>
        </main>
    )
}

export default Contact;