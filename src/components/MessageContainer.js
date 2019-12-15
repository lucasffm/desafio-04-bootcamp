import React, { useState } from "react";
import Discussion from "./Discussion";

const MessageContainer = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name: "Julio Alcantara",
        avatar:
          "https://gravatar.com/avatar/8759ba87acb33f2c1e674169f06ac088?s=400&d=robohash&r=x"
      },
      date: "04 Jun 2019",
      content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
      comments: [
        {
          id: 1,
          author: {
            name: "Diego Fernandes",
            avatar:
              "https://gravatar.com/avatar/c31bfc11caad4ee5495d0b8ddad78eb0?s=400&d=robohash&r=x"
          },
          content:
            "Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Paisis, filhis, espiritis santis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
        },
        {
          id: 2,
          author: {
            name: "Lucas de Freitas",
            avatar:
              "https://gravatar.com/avatar/c31bfc11caad4ee5495d0b8ddad78eb0?s=400&d=robohash&r=x"
          },
          content:
            "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. A ordem dos tratores não altera o pão duris. Quem num gosta di mé, boa gentis num é. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose."
        }
      ]
    },
    {
      id: 2,
      author: {
        name: "Zé das Couves",
        avatar:
          "https://gravatar.com/avatar/64bf9e53eeab8a78f151abbd167e2758?s=400&d=robohash&r=x"
      },
      date: "14 Dez 2019",
      content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
      comments: [
        {
          id: 3,
          author: {
            name: "Diego Fernandes",
            avatar:
              "https://gravatar.com/avatar/6d8172a22668d2037b04b72a9bec556c?s=400&d=robohash&r=x"
          },
          content:
            "Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Paisis, filhis, espiritis santis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
        },
        {
          id: 4,
          author: {
            name: "Lucas de Freitas",
            avatar:
              "https://gravatar.com/avatar/6695b5a9c40295b8e68251c40ee5be93?s=400&d=robohash&r=x"
          },
          content:
            "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. A ordem dos tratores não altera o pão duris. Quem num gosta di mé, boa gentis num é. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose."
        }
      ]
    }
  ]);
  return (
    <div className="container">
      {posts.map(post => (
        <Discussion key={post.id} post={post} />
      ))}
    </div>
  );
};

export default MessageContainer;
