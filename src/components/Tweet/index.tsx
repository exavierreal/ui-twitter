import React from 'react';

import {
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <RocketseatIcon />
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar />
                
                <Content>
                    <Header>
                        <strong>Arapo Sistemas</strong>
                        <span>@araposistemas</span>
                        <Dot />
                        <time>16 de jul</time>
                    </Header>

                    <Description>
                        Foguete não tem ré
                    </Description>

                    <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon />
                            168
                        </Status>
                        <Status>
                            <RetweetIcon />
                            192
                        </Status>
                        <Status>
                            <LikeIcon />
                            255
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
}

export default Tweet;