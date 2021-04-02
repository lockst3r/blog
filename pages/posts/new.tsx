import React, { useState } from 'react';
import { createPost } from '../../src/gateway';
import MainLoyaout from '../../src/components/MainLayout';
import styled from 'styled-components';
import Router from 'next/router';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const FormStyle = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 10px;
width: 600px;
height: 500px
margin-top: 10px;
`;

const TitleForm = styled.input`
  padding: 10px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  width: 100%;
`;

const DiscriptionForm = styled.textarea`
  width: 100%;
  margin-top: 10px;
  resize: vertical;
  padding: 15px;
  border: 0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  height: 150px;
`;

const SubmitButton = styled.button`
  margin: 8px;
  margin-left: auto;
  border: none;
  color: black;
  background-color: #ccc;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`;

interface IFormData {
  title: string;
  description: string;
}

const newPost: React.FC = () => {
  const [inputData, setInputData] = useState<IFormData>({
    title: '',
    description: '',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const { title, description } = inputData;

    const eventFields = {
      title: title,
      body: description,
    };

    createPost(eventFields);
    alert('You Create Post');
    Router.push('/posts/');
  };

  return (
    <MainLoyaout>
      <FormContainer>
        <h1>Create Post</h1>
        <FormStyle onSubmit={handleSubmit}>
          <TitleForm
            type="text"
            name="title"
            placeholder="Title"
            onChange={e => setInputData({ ...inputData, title: e.target.value })}
          />
          <DiscriptionForm
            name="description"
            placeholder="Description"
            onChange={e => setInputData({ ...inputData, description: e.target.value })}
          ></DiscriptionForm>
          <SubmitButton type="submit" onClick={handleSubmit}>
            Create
          </SubmitButton>
        </FormStyle>
      </FormContainer>
    </MainLoyaout>
  );
};

export default newPost;
