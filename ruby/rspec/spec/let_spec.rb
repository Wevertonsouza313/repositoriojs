describe 'somar' do
    context 'dois numeros' do
        let(:resultado) {4 + 4}
        #voce pode usar varios lets
        let(:resultado1) {resultado + 4}
        let(:resultado2) {4 + 4}


        it 'does something' do
            expect(resultado).to eq 8
            expect(resultado1).to eq 12
        end
    end
end


