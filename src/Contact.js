import React from "react";
import { useForm } from 'react-hook-form';

function Contact() {
    return (
        <main>
            <h1>お問合せ</h1>
            <form>
                <div class="form-item">
                    <label for="email">Email</label>
                    <input id="email" type="text" />
                </div>
                <div class="form-item">
                    <label for="content">お問合せ内容</label>
                    <textarea id="content" rows="3"></textarea>
                </div>
                <div class="form-item">
                    <button id="btn">送信</button>
                </div>
            </form>
        </main>
    )
}

export default Contact;