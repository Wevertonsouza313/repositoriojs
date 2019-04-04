describe 'fazer uma requisicao' do
    it 'get' do
       @melhor_opcao = Contato.get('/contacts/632')
       #puts @melhor_opcao
       #puts @melhor_opcao.code
       #expect(@melhor_opcao.code).to eq 200
       #puts @melhor.opcao.body
       #puts @melhor_opcao.parsed_response['data']['attributes']['name']
       puts @melhor_opcao.parsed_response['data']['attributes']['name'].to eq 'bruno'
       puts @melhor_opcao.parsed_response['data']['attributes']['last-name'].to eq 'X'
       puts @melhor_opcao.parsed_response['data']['attributes']['email'].to eq 'A@A'
       puts @melhor_opcao.parsed_response['data']['attributes']['age'].to eq 132
    end
end