describe 'usando around' do

    around(:each) do |testes|
        # e a mesma coisa que o before
        puts 'executando comandos antes dos testes 2019'

        testes.run

        # e a mesma coisa que o after
        puts 'executando comandos depois dos testes 2019'
    end

    it 'de dois numero' do
        total = 2 + 2
        expect(total).to eq 4
        puts "O total é:  #{total}"
        puts 'executando o teste 2019'

    end
end