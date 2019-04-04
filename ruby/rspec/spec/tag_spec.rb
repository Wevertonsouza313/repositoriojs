
#para rodar no cmd tem que usar rspec --tag nome da tag
describe 'trabalhando', teste_tag: true do
    it 'com tag' do
        puts 'usei a tag com o nome teste_tag'
    end
end

describe 'andando', :teste_simbolo do
    it 'com tag um' do
        puts 'usei a tag com o teste_simbolo'
    end
end

describe 'correndo', :nao_teste_tag do
    it 'com tag dois' do
        puts 'usei a tag com o nome nao_teste_tag'
    end
end