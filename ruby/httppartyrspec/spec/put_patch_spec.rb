describe 'fazer requisicao' do
    context 'para alterar dados com' do
        it 'put' do
            @body_put = {
                "id": 637,
                "name": "brunoX batista 289",
                "last_name": "batistaX 289",
                "email": "broX12@gmail.com",
                "age": "21",
                "phone": "4444222233",
                "address": "Rua batista 29",
                "state": "Minas gerais",
                "city": "belo horizonte 2",
            }.to_json

            @requisicao_put = Contato.put('/contacts/637', body: @body_put)

            puts @requisicao_put 
        end

        it 'patch' do
            @body_patch =   {
                "id": 632,
                "name": "bruno batista 30",
                "last_name": "batista 30",
                "email": "bruno10@gmail.com",
            }.to_json
            @requisicao_patch = Contato.patch('/contacts/632', body: @body_patch)

            puts @requisicao_patch 

        end
    end
end
