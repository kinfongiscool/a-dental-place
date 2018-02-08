import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../media.js';
import { Link } from 'react-router-dom';

const TeamMemberLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;

const TeamMemberContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.imageLeft ? 'row' : 'row-reverse'};
  margin: ${props => props.imageLeft ? '0 0 2rem 0' : '2rem 0 0 0'};

  ${media.phone`
    display: inline-block;
    margin: 0;
  `}
`;

const TeamMemberImage = styled.img`
  padding: 1rem;
  z-index: 10;
  align-self: ${props => props.imageLeft ? 'flex-start' : 'flex-end'};
  background: #58A6FF;

  ${media.phone`
    align-self: center;
  `}
`;

const TeamMemberTextContainer = styled.div`
  height: 100%;
  position: relative;
  top: ${props => props.imageLeft ? '2rem' : ''};
  right: ${props => props.imageLeft ? '3rem' : ''};
  bottom: ${props => props.imageLeft ? '' : '1rem'};
  left: ${props => props.imageLeft ? '' : '3rem'};
  background-color: #EBF4FF;
  align-items: left;
  padding: ${props => props.imageLeft ? '1rem 2rem 1rem 5rem' : '1rem 5rem 1rem 2rem'};
  margin: ${props => props.imageLeft ? '0 -2rem 2rem 0' : '1rem 0 0 -2rem'};
  transition: all 150ms ease;

  ${TeamMemberContainer}:hover & {
      background: ${props => props.clickable ? '#ACD3FF' : ''};
  }

  ${media.phone`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 2rem;
    margin: 1rem 2rem 2rem 2rem;
  `}
`;

const TeamMemberName = styled.h3`
  text-align: left;

  ${media.phone`
    margin: 0 0 1rem 0;
  `}
`;

const TeamMemberDescription = styled.p`
  text-align: left;
  line-height: 160%;

  ${media.phone`
    margin: 0;
  `}
`;

function Descriptions(props) {
  const descriptions = props.description;
  const descriptionsItems = descriptions.map((descriptionItem) =>
    <TeamMemberDescription>{ descriptionItem }</TeamMemberDescription>
  );
  return (
    <div>{ descriptionsItems }</div>
  );
}

class TeamMember extends Component {

  render() {
    return (
      <TeamMemberLink to="/meet-the-team">
        <TeamMemberContainer clickable={ this.props.clickable } imageLeft={ this.props.imageLeft } key={ this.props.key } >
            <TeamMemberImage imageLeft={ this.props.imageLeft } src={ this.props.image } alt={ this.props.name } />
            <TeamMemberTextContainer clickable={ this.props.clickable } imageLeft={ this.props.imageLeft }>
              <TeamMemberName>{ this.props.name }</TeamMemberName>
              <Descriptions description={ this.props.description }/>
            </TeamMemberTextContainer>
        </TeamMemberContainer>
      </TeamMemberLink>
    );
  }

}

export default TeamMember;
