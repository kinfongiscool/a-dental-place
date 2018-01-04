import React, { Component } from 'react';
import styled from 'styled-components';
import Faq from '../components/Faq.js'
import SectionTitle from '../components/SectionTitle.js';
import FooterContainer from './FooterContainer.js';

const Container = styled.div`
  margin: auto auto 2rem auto;
`;

class FaqsContainer extends Component {

  render() {

    const faqs = [
      <Faq
        key="faq1"
        question="Q: Which type of toothbrush should I use?"
        answer="A: The brand of the toothbrush is not as critical as the type of bristle and the size of the head. A soft toothbrush with a small head is recommended because medium and hard brushes tend to cause irritation and contribute to recession of the gums, and a small head allows you to get around each tooth more completely and is less likely to injure your gums. It's unnecessary to &#8220;scrub&#8221; the teeth as long as you are brushing at least twice a day and visiting your dentist at least twice a year for cleanings."
        colored={ true }
      />,
      <Faq
        key="faq2"
        question="Q: Is one toothpaste better than others?"
        answer="A: Generally, no. However, it's advisable to use a fluoride containing toothpaste to decrease the incidence of dental decay. We recommend our patients use what tastes good to them as long as it contains fluoride."
      />,
      <Faq
        key="faq3"
        question="Q: How often should I floss?"
        answer="A: Flossing of the teeth at least once per day helps to prevent cavities from forming between the teeth where your toothbrush can't reach. Flossing also helps to keep your gums healthy."
        colored={ true }
      />,
      <Faq
        key="faq4"
        question="Q: What's the difference between a &#8220;crown&#8221; and a &#8220;cap&#8221;?"
        answer="A: These are restorations to repair a severely broken tooth by covering all or most of the tooth after removing old fillings, fractured tooth structure, and all decay. The restoration material is made of gold, porcelain, composites, or even stainless steel. Dentists refer to all of these restorations as &#8220;crowns&#8221;. However, patients often refer to the tooth-colored ones as &#8220;caps&#8221; and the gold or stainless steel ones as &#8220;crowns&#8221;."
      />,
      <Faq
        key="faq5"
        question="Q: What's the difference between a &#8220;bridge&#8221; and a &#8220;partial denture&#8221;?"
        answer="A: Both bridges and partial dentures replace missing teeth. A bridge is permanently attached to abutment teeth or, in some cases, implants. A partial denture is attached by clasps to the teeth and is easily removed by the patient. Patients are usually more satisfied with bridges than with partial dentures."
        colored={ true }
      />,
      <Faq
        key="faq6"
        question="Q: What about &#8220;silver&#8221; fillings versus &#8220;white&#8221; fillings?"
        answer="A: Although the U.S. Public Health Service issued a report in 1993 stating there is no health reason not to use amalgam (silver fillings), more patients today are requesting &#8220;white&#8221; or tooth-colored composite fillings. We also prefer tooth-colored fillings because they &#8220;bond&#8221; to the tooth structure and therefore help strengthen a tooth weakened by decay. While fillings are also usually less sensitive to temperature, and they also look better. However, &#8220;white&#8221; fillings cannot be used in every situation, and if a tooth is very badly broken-down, a crown will usually be necessary and provide better overall satisfaction for the patient."
      />,
      <Faq
        key="faq7"
        question="Q: Do I need to have a root canal just because I have to have a crown?"
        answer="A: No. While most teeth which have had root canal treatments do need crowns to strengthen the teeth and to return the teeth to normal form and function, not every tooth needing a crown will need to have a root canal treatment."
        colored={ true }
      />
    ]

    return (
      <div>
        <Container>
          <SectionTitle colored={ false } text={ "FAQs" }/>
          { faqs }
        </Container>
        <FooterContainer />
      </div>
    );
  }

}

export default FaqsContainer;
