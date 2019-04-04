    describe 'fazer uma requisicao' do
        it 'get' do
            #se a gente nao utilizasse o modulo se chamaria o httparty com get assim:
            #@primeira_opcao = HTTParty.get('https://api-de-tarefas.herokuapp.com/contacts/7')
           # puts @primeira_opcao

           @melhor_opcao = Contato.get('/contacts/632')
           puts @melhor_opcao
           
        end
    end