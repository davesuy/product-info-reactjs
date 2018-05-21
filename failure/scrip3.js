import React from "react";
import ReactDOM from "react-dom";

var idx = "";

if(document.getElementById("app") != null) 
{
	var idx = document.getElementById("app").getAttribute("idx");
}

idx2 = "";

if(document.getElementById("app2") != null) 
{
	var idx2 = document.getElementById("app2").getAttribute("idx2");
}

idx3 = "";

if(document.getElementById("app3") != null) 
{
	var idx3 = document.getElementById("app3").getAttribute("idx3");
}



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
			care_atlas_qr_code: ""

		};

	}

	componentDidMount() {	
	
		this.fetchData();
		//this.AcfData();
	}






	fetchData() {

		fetch("https://cmmarket.wpengine.com/wp-json/wp/v2/care_atlas/" + idx + "?_embed")
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
			care_atlas_qr_code: ""

		};

	}

	componentDidMount() {	
	
		this.fetchData();
		//this.AcfData();
	}






	fetchData() {

		fetch("https://cmmarket.wpengine.com/wp-json/wp/v2/care_atlas/" + idx2 + "?_embed")
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


			this.setState({

				post_title: post_title_output,
				feat_media: feat_media,
				post_content: post_content_output

			});
			

		});


	
	}

	
	AcfData() {

		fetch("https://cmmarket.wpengine.com/wp-json/acf/v3/care_atlas/" + idx2 + "")
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

class MyComponent3 extends React.Component {

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
			care_atlas_qr_code: ""

		};

	}

	componentDidMount() {	
	
		this.fetchData();
		//this.AcfData();
	}






	fetchData() {

		fetch("https://cmmarket.wpengine.com/wp-json/wp/v2/care_atlas/" + idx3 + "?_embed")
		.then(response => {


			

			 	return response.json();
			 
			  

		}).then(response => {

			//console.log(response.title.rendered);

				if (response.ok) {
			
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
			
			}

		});


	
	}

	
	AcfData() {

		fetch("https://cmmarket.wpengine.com/wp-json/acf/v3/care_atlas/" + idx3 + "")
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


for(var i=0; i < 3; i++) {

	var cl = document.getElementsByClassName("app")[i].getAttribute("idx");

	//console.log(cl);



	class MyComponenter extends React.Component {


		constructor() {
			super();
		
			this.state = {

				post_title: ""
	

			};

		}


		componentDidMount() {	
		
			fetch("https://cmmarket.wpengine.com/wp-json/acf/v3/care_atlas/" + cl + "")
			.then(response => {

				  return response.json();

			}).then(response => {

				
				var post_title = response.acf.scientific_name;

				//console.log(post_title);	
				// var post_title_output = <div key={post_title} dangerouslySetInnerHTML={{ __html: post_title }} />;

				this.setState({

					post_title: post_title,

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

			<MyComponenter />,document.getElementsByClassName("app")[i]

		
	);

}

