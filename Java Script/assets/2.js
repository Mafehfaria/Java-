let pagamento="débito"

if (pagamento=="débito") {
    console.log("recebe 10% de desconto");
}else if (pagamento=="dinheiro" || pagamento== "pix") {
    console.log("recebe 15% de desconto");
}else if (pagamento=="2x") {
    console.log("normal sem juros");
}else if (pagamento=="mais de 2x") {
    console.log("juros de 10%");
}else{
    console.log("Não existe pagamento");
}

let Pagamento="débito";
switch (Pagamento) {
    case "débito":
        console.log("recebe 10% de desconto");
        break;
        case "dinheiro ou pix":
            console.log("recebe 15% de desconto");
            break;
            case "2x":
                console.log("preço normal sem juros");
                break;
                case "mais de 2x":
                    console.log("juros de 10%");
                    break;

                default:
                    console.log("Não existe pagamento");
                    break;
}