import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


export const Home = () => {
	return (
		<>
			<div className="p-10">
				<CKEditor
					editor={ClassicEditor}
					data="<p>Hello from CKEditor&nbsp;5!</p>"
					onReady={(editor) => {
						console.log("Editor is ready to use!", editor);
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						console.log({ event, editor, data });
					}}
					onBlur={(event, editor) => {
						console.log("Blur.", editor);
					}}
					onFocus={(event, editor) => {
						console.log("Focus.", editor);
					}}
				/>

				<button className="btn btn-lg btn-primary block ml-auto">Post</button>
			</div>
		</>
	);
};
