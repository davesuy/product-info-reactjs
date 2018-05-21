import React from "react";
import ReactDOM from "react-dom";

const class_name = "app-cm";
const class_count = document.getElementsByClassName(class_name).length;

for(var i=0; i < class_count; i++) {

	class_cm = "";

	if(document.getElementsByClassName(class_name)[i].querySelector(".app-embedd") !== null) {

		var class_cm = document.getElementsByClassName(class_name)[i].querySelector(".app-embedd").getAttribute("idx");
	
	}

	
	//console.log(class_cm);


	class AtlasComponent extends React.Component {


		constructor() {
			super();
		
			this.state = {

				atlas_title: "",
				atlas_content: "",
				feat_media: "",
				scientific_name: "",
				tank_size: "",
				tank_type: "",
				experience_required: "",
				characteristic: "",
				diet: "",
				lighting: "",
				caution: "",
				care_atlas_qr_code: "",
	

			};

		}


		componentDidMount() {	
			
			var myInit = { 
				method: 'GET',
               //headers: myHeaders,
               mode: 'cors',
               cache: 'no-store' 
           };

			fetch("https://cmmarket.wpengine.com/wp-json/acf/v3/care_atlas/" + class_cm, myInit)
			.then(response => {

				  return response.json();

			}).then(response => {

				var atlas_title = response.acf.atlas_title;
				var atlas_title_output = <div key={atlas_title} dangerouslySetInnerHTML={{ __html: atlas_title }} />;
				

				var atlas_content = response.acf.atlas_content;
				var atlas_content_output = <div key={atlas_content} dangerouslySetInnerHTML={{ __html: atlas_content }} />;

				var feat_media = response.acf.atlas_image;

				var scientific_name = response.acf.scientific_name;
				var tank_size = response.acf.tank_size;
				var tank_type = response.acf.tank_type;
				var experience_required = response.acf.experience_required;
				var characteristic = response.acf.characteristic;
				var diet = response.acf.diet;
				var lighting = response.acf.lighting;
				var caution = response.acf.caution;

				var care_atlas_qr_code = response.acf.care_atlas_qr_code;
				var care_atlas_qr_code_output = <div key={care_atlas_qr_code} dangerouslySetInnerHTML={{ __html: care_atlas_qr_code }} />;

				//console.log(tank_size);


				this.setState({

					atlas_title: atlas_title_output,
					scientific_name: scientific_name,
					atlas_content: atlas_content_output,
					feat_media: feat_media,
					tank_size: tank_size,
					tank_type: tank_type,
					experience_required: experience_required,
					characteristic: characteristic,
					diet: diet,
					lighting: lighting,
					caution: caution,
					care_atlas_qr_code: care_atlas_qr_code_output

				});

			});

		}

		render() {
	
			return (

				
				<div className='row care-atlas-popup-container'>

					<div className='col-md-12'>
						<img src={this.state.feat_media} className='aligncenter care-atlas-img' />
					</div>

					<div className='col-md-8'>
						<h1 className='atlas-title'>{this.state.atlas_title}</h1>
						<h2 className='scientific-name'>{this.state.scientific_name}</h2>
						
						<div className='atlas-content'>

							{this.state.atlas_content}

						</div>
					
					</div>

					<div className='col-md-4'>
						<div className="care-atlas-popup-sidebar">
							<h2 className='quic-facts-heading'><strong>QUICK FACTS</strong></h2>
							<p><strong>Tank size: </strong> {this.state.tank_size}</p>
							<p><strong>Tank type: </strong> {this.state.tank_type}</p>
							<p><strong>Experience required: </strong> {this.state.experience_required}</p>
							<p><strong>Characteristic: </strong> {this.state.characteristic}</p>
							<p><strong>Diet: </strong> {this.state.diet}</p>
							<p><strong>Lighting: </strong> {this.state.lighting}</p>
							<p><strong>Diet: </strong> {this.state.diet}</p>
							<p><strong>Caution: </strong> {this.state.caution}</p>

							<div className='qr-code-con'>
								{this.state.care_atlas_qr_code}
							</div>
						</div>
					</div>

				</div>
			);

		}

	}

	ReactDOM.render(

			<AtlasComponent />,document.getElementsByClassName(class_name)[i].querySelector(".app-embedd")

		
	);

}

