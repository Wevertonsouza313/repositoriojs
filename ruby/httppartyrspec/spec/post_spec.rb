 describe 'fazer uma requicisao' do
    it 'post' do
        @body =
        {
            "name": "bruno batista 2",
            "last_name": "batista 2",
            "email": "brunx2o1@gmail.com",
            "age": "21",
            "phone": "4444222233",
            "address": "Rua batista 2",
            "state": "Minas gerais",
            "city": "belo horizonte 2",
        }.to_json
       
    #forma simples do httparty
      #  @headers = {
      #   "Accept": 'application/vnd.tasksmanager.v2',
     #   'Content-Type': 'application/json'
    #    }

    #    @request = HTTParty.post('https://api-de-tarefas.herokuapp.com/contacts', body: @body , headers: @headers)
    #    puts @request

    @request = Contato.post('/contacts', body: @body)
    puts @request
    end
end