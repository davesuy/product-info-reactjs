import React from "react";
import ReactDOM from "react-dom";

const idx = document.getElementById("app").getAttribute("idx");


const containerDiv = document.getElementById("app");
	
const class_con = containerDiv.getElementsByClassName("get_class");
const le = class_con.length;



class MyComponent extends React.Component {

	constructor() {
		super();

		

		this.state = {

			feat_media: "",
			post_title: "",
			scientific_name: "",
			post_content: "",
			tank_size: "",
			tank_type: "",
			experience_required: "",
			characteristic: "",
			diet: "",
			lighting: "",
			caution: "",
			care_atlas_qr_code: "",
			length: le

		};

	}

	componentDidMount() {	

		for(var i=0; i < this.state.length; i++) {

			

		}
	
		this.fetchData();
		//this.AcfData();
	}






	fetchData() {

		fetch("https://cmmarket.wpengine.com/wp-json/wp/v2/care_atlas/" + 19888 + "?_embed")
		.then(response => {

			  return response.json();

		}).then(response => {

			//console.log(response.title.rendered);
			
			var feat_media = response._embedded['wp:featuredmedia'].map( (x) => {

				return x.source_url;

			});

			var post_title = response.title.rendered;
			var post_title_output = <div key={post_title} dangerouslySetInnerHTML={{ __html: post_title }} />;

			var post_content = response.content.rendered;
			var post_content_output = <div key={post_content} dangerouslySetInnerHTML={{ __html: post_content }} />;

			// var id = response.map( (x) => {

			// 	return <div className="api-id" key={x.id} >{x.id}</div>

			// });

			// var post_title = response.map( (x) => {

			// 	return <div className="api-title" key={x.title.rendered} dangerouslySetInnerHTML={{ __html: x.title.rendered }} />


			// });

			// var post_content = response.map( (x) => {

			// 	return <div className="api-content" key={x.id} dangerouslySetInnerHTML={{ __html: x.content.rendered }} />

			// });

			

			

			this.setState({

				post_title: post_title_output,
				feat_media: feat_media,
				post_content: post_content_output

			});
			

		});


	
	}

	
	AcfData() {

		fetch("https://cmmarket.wpengine.com/wp-json/acf/v3/care_atlas/" + idx + "")
		.then(response => {

			  return response.json();

		}).then(response => {


			
			var scientific_name = response.acf.scientific_name;
			var tank_size = response.acf.tank_size;
			var tank_type = response.acf.tank_type;
			var experience_required = response.acf.experience_required;
			var characteristic = response.acf.characteristic;
			var diet = response.acf.diet;
			var lighting = response.acf.lighting;
			var caution = response.acf.cauiton;
			var care_atlas_qr_code = response.acf.care_atlas_qr_code;

			//console.log(scientific_name);

			this.setState({

				scientific_name: scientific_name,
				tank_size: tank_size,
				tank_type: tank_type,
				experience_required: experience_required,
				characteristic: characteristic,
				diet: diet,
				lighting: lighting,
				caution: caution,
				care_atlas_qr_code: care_atlas_qr_code

			});
			
			

		});

	}

	render() {
	

		return (

			<div>

				<h1>{this.state.post_title}</h1>
			
			</div>

		);

	}


}



class MyComponent2 extends React.Component {

	constructor() {
		super();

		

		this.state = {

			feat_media: "",
			post_title: "",
			scientific_name: "",
			post_content: "",
			tank_size: "",
			tank_type: "",
			experience_required: "",
			characteristic: "",
			diet: "",
			lighting: "",
			caution: "",
			care_atlas_qr_code: "",
			length: le

		};

	}

	componentDidMount() {	

		for(var i=0; i < this.state.length; i++) {

			

		}
	
		this.fetchData();
		//this.AcfData();
	}






	fetchData() {

		fetch("https://cmmarket.wpengine.com/wp-json/wp/v2/care_atlas/" + 19888 + "?_embed")
		.then(response => {

			  return response.json();

		}).then(response => {
			
			var feat_media = response._embedded['wp:featuredmedia'].map( (x) => {

				return x.source_url;

			});

			var post_title = response.title.rendered;
			var post_title_output = <div key={post_title} dangerouslySetInnerHTML={{ __html: post_title }} />;

			var post_content = response.content.rendered;
			var post_content_output = <div key={post_content} dangerouslySetInnerHTML={{ __html: post_content }} />;

			

			this.setState({

				post_title: post_title_output,
				feat_media: feat_media,
				post_content: post_content_output

			});
			

		});


	
	}

	
	AcfData() {

		fetch("https://cmmarket.wpengine.com/wp-json/acf/v3/care_atlas/" + idx + "")
		.then(response => {

			  return response.json();

		}).then(response => {


			
			var scientific_name = response.acf.scientific_name;
			var tank_size = response.acf.tank_size;
			var tank_type = response.acf.tank_type;
			var experience_required = response.acf.experience_required;
			var characteristic = response.acf.characteristic;
			var diet = response.acf.diet;
			var lighting = response.acf.lighting;
			var caution = response.acf.cauiton;
			var care_atlas_qr_code = response.acf.care_atlas_qr_code;

			//console.log(scientific_name);

			this.setState({

				scientific_name: scientific_name,
				tank_size: tank_size,
				tank_type: tank_type,
				experience_required: experience_required,
				characteristic: characteristic,
				diet: diet,
				lighting: lighting,
				caution: caution,
				care_atlas_qr_code: care_atlas_qr_code

			});
			
			

		});

	}

	render() {
	

		return (

			<div>

				<h1>{this.state.post_title}</h1>
			
			</div>

		);

	}


}


ReactDOM.render(

		<MyComponent/>, document.getElementById("app")

	
);

ReactDOM.render(

		<MyComponent2/>, document.getElementById("app2")

	
);