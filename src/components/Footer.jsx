import React from "react";
import styled from "styled-components";

import facebook from "src/assets/images/facebook-icon.svg";
import email from "src/assets/images/email-icon.svg";
import linkedin from "src/assets/images/linkedin-icon.svg";
import instagram from "src/assets/images/instagram-icon.svg";
import youtube from "src/assets/images/youtube-icon.svg";

const FooterWrapper = styled.footer`
	display: flex;
	flex-direction: column;
`;

const FirstFooter = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	background-color: #303B42;
	height: 7em;
`;

const SecondFooter = styled.div`
	display: flex;
	justify-content: center;

	background-color: #293238;
	color: #C5C5C5;
	height: 2em;

	font-size: 0.8em;
`;

const Address = styled.div`
 max-width: 20em;
	max-height: 5em;

	color: #C5C5C5;
	font-size: 0.8em;
`;

const NewsletterLink = styled.div`
	max-width: 7em;

	color: #3AB9FF;
	font-size: 0.8em;
`;

const FaleConoscoButton = styled.button`
	background-color: #3AB9FF;
	border: 0px solid transparent;
	border-radius: 5em;
	padding: 0 1.3em 0 1.3em;
	font-weight: 0.5em;
`;

const SocialMedia = styled.div`
	display: flex;
	justify-content: space-between;

	min-width: 12em;
`;

const Footer = (props) => {
  return (
    <FooterWrapper>
						<FirstFooter>
							<Address>
								Endereço: Sala XX SG 11 - Faculdade de Tecnologia/FT. Campus Darcy Ribeiro Asa Norte. Brasília - DF
							</Address>
							<NewsletterLink>
								<b>Cadastre-se</b> na nossa <b>newsletter</b>
							</NewsletterLink>
							<FaleConoscoButton>
								<b>Fale conosco</b>
							</FaleConoscoButton>
							<SocialMedia>
								<div>
									<img src={email} alt="email" />
								</div>
								<div>
									<img src={linkedin} alt="linkedin" />
								</div>
								<div>
									<img src={instagram} alt="instagram" />
								</div>
								<div>
									<img src={facebook} alt="facebook" />
								</div>
								<div>
									<img src={youtube} alt="youtube" />
								</div>
							</SocialMedia>
						</FirstFooter>
						<SecondFooter>
							© 2021 Ramo Estudantil IEEE UnB. Proudly powered by Sydney
						</SecondFooter>
    </FooterWrapper>
  );
};

export default Footer;
