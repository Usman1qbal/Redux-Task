import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import './UpperSection.css';

class  upperSection extends Component {

searchType=["Search By","City Zip","City Name"]

createRenderer = render => 
      ({ input, meta,label, ... rest }) =>
        <div>  
          {render(input,label, rest)}
          {
            meta.error && meta.touched && <span>{meta.error}</span>
          }
        </div>


renderInput =  this.createRenderer((input,label)=>
  <input {...input} name="searchInput" id="searchInput" placeholder={label}/>
);

RenderSelect = this.createRenderer((input, label, {children})=>
                                      <select {...input} className="dropdown">
                                          {children}
                                      </select>
);


render() {
  
      const { handleSubmit,  submitting, getweather, getdata } = this.props;
    return(
    <section className="upperSection">
    <form onSubmit={handleSubmit(getweather)}>
        <div className="upperSectionGrid">
        
                <Field id="findTypes" label="type" name="findTypes" component={this.RenderSelect} >
                    
                    {   this.searchType.map(type=>
                                <option className="dropdown-content option" key={type} value={type}>
                                        {type}
                                </option>) }
                </Field>

                <Field  placeholder="City Detail" label="City Detail" name="cityDetail" component={this.renderInput} />
                
              <button className="searchButton" type="submit" disabled={submitting} >  <i className="fa fa-search"></i>  </button>
        </div>
    </form>
</section>
    );
}
       
}
            

upperSection = reduxForm({
  form: 'upperSection',
  destroyOnUnmount: false,
})(upperSection)


export default (upperSection);
