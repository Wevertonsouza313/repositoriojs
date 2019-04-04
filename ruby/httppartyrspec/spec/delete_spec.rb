describe 'fazer requisicao' do
    it 'delete' do
        # HTTParty.delete('URL do site/contacts/12')
        Contato.delete('/contacts/94')
    end
end